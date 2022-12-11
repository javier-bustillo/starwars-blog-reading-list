const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      photoCharacters: [],
      planets: [],
      readMoreList: [],
    },
    actions: {
      getCharacter: () => {
        fetch("https://swapi.dev/api/people/")
          .then((response) => response.json())
          .then((data) =>
            setStore({
              characters: data.results,
            })
          )
          .catch((err) => console.error(err));
      },

      getPlanet: () => {
        fetch("https://swapi.dev/api/planets/")
          .then((response) => response.json())
          .then((data) =>
            setStore({
              planets: data.results,
            })
          )
          .catch((err) => console.error(err));
      },

      addReadMoreItem: (item) => {
        const store = getStore();
        if (!store.readMoreList.includes(item)) {
          setStore({
            ...store.readMoreList,
            readMoreList: store.readMoreList.concat(item),
          });
        }
      },
      delReadMoreItem: (whateverItem) => {
        const store = getStore();
        const itemListed = store.readMoreList;

        let readMoreListFiltered = itemListed.filter(
          (item) => item !== whateverItem
        );

        setStore({
          readMoreList: readMoreListFiltered,
        });
      },
    },
  };
};

export default getState;
