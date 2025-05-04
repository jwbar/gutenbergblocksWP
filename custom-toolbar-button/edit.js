// edit.js  
const Edit = ({ attributes, setAttributes }) => {  
    return (  
      <BlockControls>  
        <ToolbarGroup>  
          <ToolbarButton  
            icon="highlight"  
            label="Highlight"  
            onClick={() => {  
              // Wrap selected text in <mark>  
            }}  
          />  
        </ToolbarGroup>  
      </BlockControls>  
    );  
  };  