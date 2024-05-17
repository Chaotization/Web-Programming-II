import {Box, Collapse, IconButton, Typography} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

function RenderObject({ obj, toggleExpandKey, expandedKeys, level = 0 }) {
    return Object.entries(obj).map(([key, value]) => {
        const newPath = `${level}-${key}`;
        const isExpandable = typeof value === 'object' && value !== null && Object.keys(value).length > 0;
        const isEmptyObject = typeof value === 'object' && value !== null && Object.keys(value).length === 0;

        const displayValue = value === null ? 'null' :
            isEmptyObject ? '[]' :
                !isExpandable ? value.toString() :
                    '';

        return (
            <Box key={newPath} sx={{ pl: level * 2, mt: level > 0 ? 1 : 0 }}>
                <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                    {key}: {displayValue}
                    {isExpandable && (
                        <IconButton size="small" onClick={() => toggleExpandKey(newPath)}>
                            {expandedKeys[newPath] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                    )}
                </Typography>
                {isExpandable && expandedKeys[newPath] && (
                    <Collapse in={expandedKeys[newPath]} timeout="auto" unmountOnExit>
                        <RenderObject obj={value} toggleExpandKey={toggleExpandKey} expandedKeys={expandedKeys} level={level + 1} />
                    </Collapse>
                )}
            </Box>
        );
    });
}

export default RenderObject;