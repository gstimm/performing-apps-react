interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

export function ProjectItem({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} = <strong>{product.price}</strong>
    </div>
  );
}
