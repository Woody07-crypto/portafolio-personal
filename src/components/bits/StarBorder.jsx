import './StarBorder.css'

const StarBorder = ({
  as: Component = 'a',
  className = '',
  color = '#C26A3A',
  speed = '6s',
  thickness = 1,
  backgroundColor = '#1F1A14',
  textColor = '#FFF9F0',
  borderColor = 'transparent',
  children,
  ...rest
}) => {
  const { style, ...props } = rest

  return (
    <Component
      className={`star-border-container ${className}`}
      style={{ padding: `${thickness}px 0`, ...style }}
      {...props}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 12%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 12%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="inner-content"
        style={{ background: backgroundColor, color: textColor, borderColor }}
      >
        {children}
      </div>
    </Component>
  )
}

export default StarBorder
