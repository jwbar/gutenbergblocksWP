( function( blocks, element, editor, components ) {
    const { registerBlockType } = blocks;
    const { createElement: el } = element;
    const { RichText, InspectorControls } = editor;
    const { PanelBody, SelectControl } = components;

    registerBlockType( 'simple/notice-block', {
        title: 'Notice Box',
        icon: 'info',
        category: 'widgets',
        attributes: {
            content: { type: 'string', default: '' },
            noticeType: { type: 'string', default: 'info' }
        },

        edit: function( props ) {
            const { attributes: { content, noticeType }, setAttributes } = props;

            return [
                el( InspectorControls, {},
                    el( PanelBody, { title: 'Notice Type' },
                        el( SelectControl, {
                            label: 'Choose a style',
                            value: noticeType,
                            options: [
                                { label: 'Info', value: 'info' },
                                { label: 'Success', value: 'success' },
                                { label: 'Warning', value: 'warning' },
                                { label: 'Error', value: 'error' }
                            ],
                            onChange: ( val ) => setAttributes( { noticeType: val } )
                        } )
                    )
                ),
                el( 'div', { className: 'notice-box ' + noticeType },
                    el( RichText, {
                        tagName: 'p',
                        value: content,
                        onChange: ( val ) => setAttributes( { content: val } ),
                        placeholder: 'Write your message…'
                    } )
                )
            ];
        },

        save: function( props ) {
            return el( 'div', { className: 'notice-box ' + props.attributes.noticeType },
                el( RichText.Content, {
                    tagName: 'p',
                    value: props.attributes.content
                } )
            );
        }
    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor || window.wp.editor,
    window.wp.components
);
