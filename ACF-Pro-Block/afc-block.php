// acf-blocks.php  
acf_register_block_type([  
  'name'            => 'custom-section',  
  'title'           => 'Custom Section',  
  'render_template' => 'blocks/custom-section/template.php',  
  'supports'        => ['align' => true, 'jsx' => true],  
]);  