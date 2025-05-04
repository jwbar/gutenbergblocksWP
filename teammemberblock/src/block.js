import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { members } = attributes;

    const addMember = () => {
        const newMembers = [...members, { name: '', title: '', imageUrl: '', bio: '', twitter: '', linkedin: '' }];
        setAttributes({ members: newMembers });
    };

    const updateMember = (index, field, value) => {
        const newMembers = [...members];
        newMembers[index][field] = value;
        setAttributes({ members: newMembers });
    };

    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <Button variant="primary" onClick={addMember}>+ Add Team Member</Button>
            {members.map((member, index) => (
                <div key={index} className="team-member">
                    <MediaUpload
                        onSelect={(media) => updateMember(index, 'imageUrl', media.url)}
                        type="image"
                        render={({ open }) => (
                            <Button onClick={open}>
                                {member.imageUrl ? (
                                    <img src={member.imageUrl} alt="Profile" style={{ width: 80, height: 80, borderRadius: '50%' }} />
                                ) : 'Upload Image'}
                            </Button>
                        )}
                    />
                    <RichText
                        tagName="h4"
                        value={member.name}
                        onChange={(val) => updateMember(index, 'name', val)}
                        placeholder="Name"
                    />
                    <RichText
                        tagName="p"
                        value={member.title}
                        onChange={(val) => updateMember(index, 'title', val)}
                        placeholder="Job Title"
                    />
                    <RichText
                        tagName="p"
                        value={member.bio}
                        onChange={(val) => updateMember(index, 'bio', val)}
                        placeholder="Bio"
                    />
                    <InspectorControls>
                        <PanelBody title="Social Links" initialOpen={false}>
                            <TextControl
                                label="Twitter"
                                value={member.twitter}
                                onChange={(val) => updateMember(index, 'twitter', val)}
                            />
                            <TextControl
                                label="LinkedIn"
                                value={member.linkedin}
                                onChange={(val) => updateMember(index, 'linkedin', val)}
                            />
                        </PanelBody>
                    </InspectorControls>
                </div>
            ))}
        </div>
    );
}
