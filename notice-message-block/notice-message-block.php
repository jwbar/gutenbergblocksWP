<?php
/**
 * Plugin Name: Simple Notice Block
 * Description: A Gutenberg block that displays a colored message box.
 * Version: 1.0.0
 * Author: Jwbar
 */

function smb_enqueue_block_assets() {
    wp_register_script(
        'notice-block-js',
        plugins_url('notice-block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'),
        false,
        true
    );

    register_block_type('simple/notice-block', array(
        'editor_script' => 'notice-block-js',
    ));
}
add_action('init', 'smb_enqueue_block_assets');
