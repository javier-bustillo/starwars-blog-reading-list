const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characters: [],
      planets: [],
      readMoreList: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
      },
      getCharacter: () => {
        fetch("https://swapi.dev/api/people")
          .then((response) => response.json())
          .then((data) =>
            setStore({
              characters: data.results,
            })
          )
          .catch((err) => console.error(err));
      },
      getPlanet: () => {
        fetch("https://swapi.dev/api/planets")
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
      delReadMoreItem: (characterItem) => {
        const store = getStore();
        const characters = store.readMoreList;

        let readMoreListFiltered = characters.filter(
          (item) => item !== characterItem
        );

        setStore({
          readMoreList: readMoreListFiltered,
        });
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({
          demo: demo,
        });
      },
    },
  };
};

export default getState;
