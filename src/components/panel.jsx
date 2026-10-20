function panel({judul, childern}) {
    return (
        <div classname="panel">
            {judul && <h2>{judul}</h2>}
            {childern}
        </div>
    )

}