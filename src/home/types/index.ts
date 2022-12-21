export interface Product {
    createdAt: string;
    product: string;
    points: number;
    image: string;
    is_redemption: boolean;
    id: string;
}
export interface Products {
    products: Product[];
}