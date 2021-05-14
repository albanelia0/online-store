import "./index.scss"

const Breadcrumbs = () => {

  const breadcrumbsRoutes = ["Todos los productos", "Cocina", "Productos destacados"]

  return (
    <div className="breadcrumbs">
      {breadcrumbsRoutes.map((breadcrumb, index) => (
        <div className="breadcrumbs__container">
          <span className="breadcrumbs__title">{breadcrumb}</span>
          {index < breadcrumbsRoutes.length - 1 &&<span className="breadcrumbs__slash">/</span> }
        </div>
      ))}
    </div>
  )
}

export default Breadcrumbs
