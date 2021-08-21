# Tiendita - NoSQL

Proyecto considerando el diseño NoSQL.

## Descripción

En este proyecto se considera la facturación de productos, en la cabecera de la factura se tiene en cuenta: cliente, valor_total y fecha de emisión; adicional a esto, se detallan las compras y en cada detalle se tiene en cuenta el producto, la cantidad y el valor por la cantidad.

## Diseño de los Componentes

En este proyecto se contemplan tres componentes: facturar, clientes y productos.

- Para los clientes se tiene en cuenta la relación con la ciudad y esta a su vez con el país.

- Para los productos se tiene cuenta la relación con los proveedores de la tienda. 

- Para la factura se relaciona con los detalles correspondientes.

## Arquitectura

Este proyecto fue implementado en Node.js y la Base de datos a considerar es Mongodb.
