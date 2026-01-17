export const getStyles = () => {
  // Check body background color to detect CSES theme
  const bodyBg = getComputedStyle(document.body).backgroundColor;
  const isDark = bodyBg !== 'rgb(255, 255, 255)'
  //|| bodyBg === 'rgb(0, 0, 0)' || bodyBg === 'rgb(17, 17, 17)';




  console.log('🎨 Body BG:', bodyBg, '| isDark:', isDark); // Debug

  return {
    containerStyle: {
      margin: "10px 0",
    } as React.CSSProperties,

    hintHeaderStyle: {
      padding: "6px 0",
      color: isDark ? "#7ab5db" : "#005ea6",
      cursor: "pointer",
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
    } as React.CSSProperties,

    arrowStyle: {
      marginRight: "8px",
      fontSize: "10px",
      width: "12px",
    } as React.CSSProperties,

    hintContentGrey: {
      padding: "12px",
      margin: "5px 0 10px 0",
      backgroundColor: isDark ? "#262626" : "#fafafa",
      border: isDark ? "1px solid #333" : "1px solid #e5e5e5",
      borderRadius: "4px",
      color: isDark ? "#ccc" : "#333",
      fontSize: "14px",
    } as React.CSSProperties,

    hintContentBlue: {
      padding: "12px",
      margin: "5px 0 10px 0",
      backgroundColor: isDark ? "#1a2a36" : "#fafafa",
      border: isDark ? "1px solid #35597a" : "1px solid #e5e5e5",
      borderRadius: "4px",
      color: isDark ? "#ccc" : "#333",
    } as React.CSSProperties,

    topicTagStyle: {
      background: isDark ? "#2a4a66" : "#e8e8e8",
      color: isDark ? "#b5e0ff" : "#333",
      border: isDark ? "1px solid #4a6a8a" : "1px solid #d0d0d0",
      borderRadius: "3px",
      padding: "2px 8px",
      fontSize: "12px",
    } as React.CSSProperties,

    resourceLinkStyle: {
      color: isDark ? "#7ab5db" : "#005ea6",
      fontSize: "13px",
      textDecoration: "underline",
    } as React.CSSProperties,
  };
};
