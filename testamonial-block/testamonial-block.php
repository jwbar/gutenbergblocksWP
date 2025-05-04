<?php
/**
 * Plugin Name: Simple Testimonial Block
 * Description: A Gutenberg block for adding a testimonial with quote and author.
 * Version: 1.0.0
 * Author: Jwbar
 */

function stb_register_block() {
    wp_register_script(
        'testimonial-block-js',
        plugins_url( 'testimonial-block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
        null,
        true
    );

    register_block_type( 'simple/testimonial-block', array(
        'editor_script' => 'testimonial-block-js'
    ) );
}
add_action( 'init', 'stb_register_block' );
