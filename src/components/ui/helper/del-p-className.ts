const delPClassName = (className: string = '') => {
    return className.replaceAll(/(\w*:)?p-(\d|\[.*\])/g, '')
}

export default delPClassName
