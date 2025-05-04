<?php
/**
 * Plugin Name: CTA Block
 * Description: A customizable Call to Action block for Gutenberg.
 * Version: 1.0.0
 * Author: Your Name
 */

function ctab_register_block() {
    register_block_type(__DIR__);
}
add_action('init', 'ctab_register_block');
