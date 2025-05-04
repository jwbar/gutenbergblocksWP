import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, URLInputButton, ColorPalette } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

const colors = [
    { name: 'Blue', color: '#007cba' },
    { name: 'Green', color: '#46b450' },
    { name: 'Black', color: '#000000' },
    { name: 'White', color: '#ffffff' },
    { name: 'Red', color: '#d63638' },
];

export default function Edit({ attributes, setAttributes }) {
    const { headline, subheadline, buttonText, buttonUrl, bgColor, textColor } = attributes;
    const blockProps = useBlockProps({ style: { backgroundColor: bgColor, color: textColor, padding: '2rem', borderRadius: '10px' } });

    return (
        <>
            <InspectorControls>
                <PanelBody title="Colors">
                    <p>Background Color</p>
                    <ColorPalette
                        colors={colors}
                        value={bgColor}
                        onChange={(color) => setAttributes({ bgColor: color })}
                    />
                    <p>Text Color</p>
                    <ColorPalette
                        colors={colors}
                        value={textColor}
                        onChange={(color) => setAttributes({ textColor: color })}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <RichText
                    tagName="h2"
                    value={headline}
                    onChange={(val) => setAttributes({ headline: val })}
                    placeholder="Headline"
                />
                <RichText
                    tagName="p"
                    value={subheadline}
                    onChange={(val) => setAttributes({ subheadline: val })}
                    placeholder="Subheadline"
                />
                <div>
                    <RichText
                        tagName="a"
                        value={buttonText}
                        onChange={(val) => setAttributes({ buttonText: val })}
                        placeholder="Button Text"
                        className="cta-button"
                    />
                    <URLInputButton
                        url={buttonUrl}
                        onChange={(url) => setAttributes({ buttonUrl: url })}
                    />
                </div>
            </div>
        </>
    );
}
 