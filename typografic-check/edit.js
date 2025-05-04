// edit.js  
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';  
const Edit = ({ attributes, setAttributes }) => (  
  <>  
    <InspectorControls>  
      <PanelColorSettings  
        title="Color Settings"  
        colorSettings={[{  
          value: attributes.color,  
          onChange: (color) => setAttributes({ color }),  
          label: 'Text Color',  
        }]}  
      />  
    </InspectorControls>  
    <h2 style={{ color: attributes.color }}>{attributes.text}</h2>  
  </>  
);  