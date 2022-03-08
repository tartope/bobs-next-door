import React from "react"
import { v4 as uuid } from "uuid"

function NewStoreForm({ handleAddStore }) {

    function submitStore(event){
        // const selectElement = event.target.value
        const name = event.target['name'].value
        const image = event.target['image'].value
        const season = event.target['season'].value
        const episode = event.target['episode'].value

        const newStore = {
            id: uuid(),
            name: name,
            image: image,
            season: season,
            episode: episode,
        }
        handleAddStore(newStore)
    }

    return(
        <form onSubmit={submitStore}>
            <input type="text" id="name" placeholder="Store Name"/>
            <input type="text" id="image" placeholder="Image URL" />
            <input type="number" id="season" placeholder="Season" step="1"/>
            <input type="number" id="episode" placeholder="Episode" step="1"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;