export const getRotatedBoundingBox = (x, y, width, height, rotation) => {
    const radians = (rotation * Math.PI) / 180; // Convert degrees to radians

    // Original corners of the image
    const corners = [
        { x, y }, // top-left
        { x: x + width, y }, // top-right
        { x: x + width, y: y + height }, // bottom-right
        { x, y: y + height }, // bottom-left
    ];

    // Calculate the rotated corners
    const rotatedCorners = corners.map(corner => {
        return {
            x: x + (corner.x - x) * Math.cos(radians) - (corner.y - y) * Math.sin(radians),
            y: y + (corner.x - x) * Math.sin(radians) + (corner.y - y) * Math.cos(radians),
        };
    });

    // Find min and max bounds from the rotated corners
    const minX = Math.min(...rotatedCorners.map(c => c.x));
    const maxX = Math.max(...rotatedCorners.map(c => c.x));
    const minY = Math.min(...rotatedCorners.map(c => c.y));
    const maxY = Math.max(...rotatedCorners.map(c => c.y));

    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY,
    };
};