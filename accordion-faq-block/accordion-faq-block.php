<?php
/**
 * Plugin Name: Accordion FAQ Block
 * Description: A simple accordion (toggle) block for FAQs and content sections.
 * Version: 1.0.0
 * Author: Jwbar
 */

function afaq_register_block() {
    register_block_type(__DIR__);
}
add_action('init', 'afaq_register_block');
