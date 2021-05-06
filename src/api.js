export const fetchDSNarrativeRelationships = async () => {
    let filename = 'assets/designspace/NR_collection.json'
    let resp = await fetch(filename)
    let json = await resp.json()
    return json['NR']
}

export const fetchDSDataOperations = async () => {
    let filename = 'assets/designspace/DO_collection.json'
    let resp = await fetch(filename)
    return await resp.json()
}

export const fetchDSEditorialLayers = async () => {
    let filename = 'assets/designspace/EL_collection.json'
    let resp = await fetch(filename)
    return await resp.json()
}

export const fetchTransitionCards = async () => {
    let filename = 'assets/designspace/transition_cards.json'
    let resp = await fetch(filename)
    return await resp.json()
}
