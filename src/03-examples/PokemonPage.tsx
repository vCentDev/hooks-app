import { useCounter } from "../Hooks/useCounter";
import { usePokemon } from "../Hooks/usePokemon";

export const PokemonPage = () => {
    const { counter, increment, decrement } = useCounter()

    const { pokemon, formatedId } = usePokemon({ id: counter })

    return (
        <div className="bg-gradient flex flex-col items-center">
            <h1 className="text-2xl font-thin text-white">Pokémon</h1>
            <h3 className="text-xl font-bold text-white">#{formatedId} - {pokemon?.name} </h3>
            <img
                src={pokemon?.imageUrl}
                alt={pokemon?.name}
            />

            <div className="flex gap-2">

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={decrement}
                >
                    Anterior
                </button>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={increment}
                >
                    Siguiente
                </button>

            </div>
        </div>
    );
};
