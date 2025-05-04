// render.php  
$posts = wp_get_recent_posts([  
  'numberposts' => $attributes['postsToShow'],  
  'post_status' => 'publish'  
]);  
echo '<div class="recent-posts">';  
foreach ($posts as $post) {  
  echo '<h3>' . esc_html($post['post_title']) . '</h3>';  
}  
echo '</div>';  