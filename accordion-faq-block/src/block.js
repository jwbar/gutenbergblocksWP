import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { title, isOpen } = attributes;
    const blockProps = useBlockProps();
    const [open, setOpen] = useState(isOpen);

    const toggleAccordion = () => {
        setOpen(!open);
        setAttributes({ isOpen: !open });
    };

    return (
        <div {...blockProps} className={`faq-accordion ${open ? 'open' : ''}`}>
            <div className="faq-header" onClick={toggleAccordion} role="button" aria-expanded={open}>
                <RichText
                    tagName="h4"
                    value={title}
                    onChange={(val) => setAttributes({ title: val })}
                    placeholder="Question..."
                />
            </div>
            {open && (
                <div className="faq-content">
                    <InnerBlocks />
                </div>
            )}
        </div>
    );
}
