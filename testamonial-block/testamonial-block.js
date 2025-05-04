( function( blocks, element, editor ) {
    const { registerBlockType } = blocks;
    const { createElement: el } = element;
    const { RichText } = editor;

    registerBlockType( 'simple/testimonial-block', {
        title: 'Testimonial',
        icon: 'format-quote',
        category: 'widgets',
        attributes: {
            quote: { type: 'string', default: '' },
            author: { type: 'string', default: '' },
            title: { type: 'string', default: '' }
        },

        edit: function( props ) {
            const { attributes, setAttributes } = props;

            return el( 'blockquote', { className: 'testimonial-block' },
                el( RichText, {
                    tagName: 'p',
                    placeholder: 'Testimonial text...',
                    value: attributes.quote,
                    onChange: ( val ) => setAttributes( { quote: val } )
                } ),
                el( RichText, {
                    tagName: 'cite',
                    placeholder: 'Author name',
                    value: attributes.author,
                    onChange: ( val ) => setAttributes( { author: val } )
                } ),
                el( RichText, {
                    tagName: 'span',
                    className: 'testimonial-title',
                    placeholder: 'Author title (optional)',
                    value: attributes.title,
                    onChange: ( val ) => setAttributes( { title: val } )
                } )
            );
        },

        save: function( props ) {
            const { quote, author, title } = props.attributes;
            return el( 'blockquote', { className: 'testimonial-block' },
                el( 'p', null, quote ),
                el( 'cite', null, author ),
                title && el( 'span', { className: 'testimonial-title' }, title )
            );
        }
    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor || window.wp.editor
);
