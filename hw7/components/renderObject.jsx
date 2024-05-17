
import { motion } from "framer-motion";
import {Collapse, IconButton, Typography} from "@mui/material";
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import Link from "next/link";
function RenderObject({ obj, toggleExpandKey, expandedKeys }) {
    const singularList = {
        'launch': 'launches',
        'launchpad': 'launchpads',
        'core': 'cores',
        'payload': 'payloads',
        'rocket': 'rockets',
        'ship': 'ships'
    };
    const pluralList = ['launches', 'launchpads', 'cores', 'payloads', 'rockets', 'ships'];

    const renderValue = (value, key) => {
        if (value === null) {
            return 'null';
        }

        const isExpandable = typeof value === 'object' && value !== null && Object.keys(value).length > 0;
        const isEmptyObject = typeof value === 'object' && value !== null && Object.keys(value).length === 0;

        if (isEmptyObject) {
            return '[]';
        } else if (isExpandable) {
            if (pluralList.includes(key)) {
                return value.map((item, index) => (
                    <ol key={index}>
                        {key === 'cores' ? (
                            <li>
                                {Object.entries(item).map(([propKey, propValue]) => (
                                    <li key={propKey}>
                                        {propKey === 'core' ? (
                                            <Link href={`/${key}/${propValue}`} style={{color: 'blue'}}
                                                  onClick={() => console.log('Link clicked:', propValue)}>
                                                {propKey}: {propValue}
                                            </Link>
                                        ) : (
                                            <span>{propKey}: {propValue}</span>
                                        )}
                                    </li>
                                ))}
                            </li>
                        ) : (
                            <li>
                                <Link href={`/${key}/${item}`} style={{color: 'blue'}}
                                      onClick={() => console.log('Link clicked:', item)}>
                                    {item}
                                </Link>
                            </li>
                        )}
                    </ol>
                ));
            } else {
                return (
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {Object.entries(value).map(([nestedKey, nestedValue]) => (
                            <li key={nestedKey}>
                                {renderNestedValue(nestedValue, nestedKey, toggleExpandKey, expandedKeys)}
                            </li>
                        ))}
                    </ul>
                );
            }
        } else {
            if (Object.keys(singularList).includes(key)) {
                return (
                    <Link href={`/${singularList[key]}/${value}`} style={{color: 'blue'}}
                          onClick={() => console.log('Link clicked:', value)}>
                        {value}
                    </Link>
                );
            } else {
                return value.toString();
            }
        }
    };

    const renderNestedValue = (value, key, toggleExpandKey, expandedKeys) => {
        const isExpandable = typeof value === 'object' && value !== null && Object.keys(value).length > 0;
        const newPath = key;

        if (isExpandable) {
            return (
                <>
                    <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                        {key}:
                        <IconButton size="small" onClick={() => toggleExpandKey(newPath)}>
                            {expandedKeys[newPath] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                    </Typography>
                    {expandedKeys[newPath] && (
                        <Collapse in={expandedKeys[newPath]} timeout="auto" unmountOnExit>
                            <ul>{renderValue(value, key)}</ul>
                        </Collapse>
                    )}
                </>
            );
        } else {
            return (
                <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                    {key}: {renderValue(value, key)}
                </Typography>
            );
        }
    };

    return (
        <ul className="list-none p-0">
            {Object.entries(obj).map(([key, value]) => {
                const newPath = key;
                const isExpandable = typeof value === 'object' && value !== null && Object.keys(value).length > 0;

                let displayValue = renderValue(value, key);

                return (
                    <li key={newPath}>
                        <Typography variant="body2" component="div" className="flex items-center">
                            {key}:
                            {isExpandable ? null : <ul>{displayValue}</ul>}
                            {isExpandable && (
                                <IconButton size="small" onClick={() => toggleExpandKey(newPath)}>
                                    {expandedKeys[newPath] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </IconButton>
                            )}
                        </Typography>
                        {isExpandable && expandedKeys[newPath] && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ul>{displayValue}</ul>
                            </motion.div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

export default RenderObject;