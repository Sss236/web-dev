const ExploreItem = (explore) => {
    return(`
            <a class="col-sm-2 col-mg-1 d-none d-xl-block mt-2"
            style="width: fit-content"
            id="${explore.name}"
            href="${explore.ref}">
                    <i class="${explore.icon} "></i>
                    ${explore.name}
            </a>

            <a class="list-group d-lg-block d-xl-none col-xs-1 col-sm-1 mt-1 px-2"
            style="width: fit-content" ${explore.selected ? 'active' : ''} href="/">
                    <i class="${explore.icon} "></i>
            </a>
            `);
}

export default ExploreItem;