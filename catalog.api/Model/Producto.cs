namespace catalog.api
{
    public class Producto
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public double PrecioUnitario { get; set; }
        public double PorcentajeDescuento { get; set; }
        public string Estado{ get; set; }

    }
}
