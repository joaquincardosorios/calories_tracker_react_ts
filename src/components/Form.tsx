
import { useState, ChangeEvent } from "react"
import { Activity } from "../types"
import { categories } from "../data/categories"

export default function Form() {
    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement>|ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)
        
        setActivity({
            ...activity,  
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    return (
    <form
        className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria: </label>
            <select
                id="category" 
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                value={activity.category}
                onChange={handleChange}
            >
                {categories.map(category => (
                    <option 
                        value={category.id}
                        key={category.id}
                    >{category.name}</option>
                ))}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad: </label>
            <input type="text" id="name" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Comida, jugo de naranja, Ejercicios, Bicicleta"
                value={activity.name}
                onChange={handleChange}
            />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorias: </label>
            <input type="number" id="calories" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calorias: ej. 300 o 500"
                value={activity.calories}
                onChange={handleChange}
            />
        </div>
        <input type="submit" 
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white"
            value='Guardar Comida o Guardar ejercicio'
        />
    </form>
  )
}