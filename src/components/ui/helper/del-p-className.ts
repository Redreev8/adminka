const delPClassName = (className: string = '') => {
    return className.replaceAll(/(?<!\w)p(\w)?-(\d|\[.*\])/g, '')
}

export default delPClassName
