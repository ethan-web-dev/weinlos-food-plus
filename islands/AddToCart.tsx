import { useState } from "preact/hooks";
import { addToCart, useCart } from "@/utils/data.ts";

interface AddToCartProps {
  id: string;
}

export default function AddToCart(props: AddToCartProps) {
  const { data } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const add = (e: MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addToCart(data!.id, props.id).finally(() => {
      setIsAdding(false);
    });
  };

  return (
    <button
      onClick={add}
      disabled={!data && !isAdding}
      class={`w-full ${
        isAdding ? "!opacity-60" : "opacity-100"
      } border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium bg-accent text-white hover:opacity-90`}
    >
      {isAdding ? "Adding..." : "Add to Cart"}
    </button>
  );
}
