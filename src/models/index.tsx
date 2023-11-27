export type ProductInfoShort = {
    name: string;
    price: number;
    id: number;
    productDetailLink: string;
}

export type PrintifyProductOptionValue = {
    id: number;
    title: string;
}

export type PrintifyProductOption = {
    name: string;
    type: string;
    values: PrintifyProductOptionValue[];
}

export type PrintifyProductVariant = {
    id: number;
    sku: string;
    cost: number;
    price: number;
    title: string;
    grams: number;
    is_enabled: boolean;
    is_default: boolean;
    is_available: boolean;
    is_printify_express_eligible: boolean;
    options: number[];
}

export type PrintifyProductImage = {
    src: string;
    variant_ids: number[];
    position: string;
    is_default: boolean;
}

export type PrintifyProductPrintArea = {
    variant_ids: number[];
    placeholders: any[];
    background: string;
}


export type PrintifyProduct = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    options: PrintifyProductOption[];
    variants: PrintifyProductVariant[];
    images: PrintifyProductImage[];
    created_at: string;
    updated_at: string;
    visible: boolean;
    is_locked: boolean;
    is_printify_express_eligible: boolean;
    is_printify_express_enabled: boolean;
    blueprint_id: number;
    user_id: number;
    shop_id: number;
    print_provider_id: number;
    print_areas: PrintifyProductPrintArea[];
    sales_channel_properties: any[];
}


export type GetProductsResponse = {
    current_page: number;
    data: PrintifyProduct[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}