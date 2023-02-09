export const generateLink = (item) => {
    let link;
    const givenLink = typeof item === "object" ? item.id : item
    switch (givenLink) {
        case "men's clothing":
            link = `/clothing/men/${item?.id ? item.id : ""}`
            break;
        case "women's clothing":
            link = `/clothing/women/${item?.id ? item.id : ""}`
            break;
        case "electronics":
            link = `/electronics/${item?.id ? item.id : ""}`
            break;
        case "jewelery":
            link = `/jewellery/${item?.id ? item.id : ""}`
            break;
        default:
            link = "/all-products"
            break;
    }
    return link;
}