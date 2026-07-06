export const validateProduct = (product) => {

    const errors = {};

    if (!product.name) {
        errors.name = "El nombre es requerido";
    }

    if (!product.price || product.price <= 0) {
        errors.price = "El precio es requerido";
    }

    if (!product.description.trim()) {
        errors.description = "La descripción es requerida";
    }
    
    // if (!product.category) {
    //     errors.category = "La categoría es requerida";
    // }


    if (!product.file) {
        errors.file = "El archivo es requerido";
    }

    return errors;

}