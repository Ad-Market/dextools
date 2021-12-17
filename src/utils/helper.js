const numberWithCommas = (x)  => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

const tokenAddress = (address) => {
    const part1 = address.substr(0, 8) + '...';
    const part2 = address.substr(address.length - 8);

    return part1 + part2;
}

export {numberWithCommas, tokenAddress}