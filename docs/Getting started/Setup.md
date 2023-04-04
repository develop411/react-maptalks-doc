---
sidebar_position: 3
---

# Setup

To setup a new map in your component, you need to do: 

  1. create a state variable that contains the initial map options.
  This object is an [mapOptions](https://maptalks.org/maptalks.js/api/1.x/Map.html#options) object defined by Maptalks
  2. Wrap the mapComponent with a MaptalksProvider to provide its children to general context that contain the map instance.
  3. Add a MapComponent inside to a div that will contain and dimentionatethe map. The MapComponent need an idMap, a mapOptions, and optionally a className.


this example describe all steps:

```tsx
export default function Map() {

    //1. create a state variable that contains the initial map options.
    const [mapOptions, setMapOptions] = useState<maptalks.MapOptions>()
    useEffect(() => {
        setMapOptions({
            center: [-76.4, 3.4],
            zoom: 17
        })
    }, [])

    return (
      // 2. Wrap the MapComponent with a MaptalksProvider
        <MaptalksProvider>
        {/* 3. Add a MapComponent inside to a div that will contain and dimentionate the map. */}
            <div className={styles.mapContainer} >
                <MapComponent
                    idMap="myMap"
                    mapOptions={mapOptions}
                    className="mapClass" //Previously defined in a css file. 
                >
                </MapComponent>
            </div>
        </MaptalksProvider>
    );
}
```

At this moment the map instance must be created, but you can't see nothing because this map don't have any layer. To see the first layer, we will to add a new BaseLayer:

```tsx
export default function Map() {

    .
    .
    .
    return (
        <MaptalksProvider>
            <div className={styles.mapContainer} >
                <MapComponent
                    idMap="myMap"
                    mapOptions={mapOptions}
                    className="mapClass" //Previously defined in a css file. 
                >
                //highlight-start
                    <BaseLayer
                        id="1345"
                        options={{
                            urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                            subdomains: ["a", "b", "c", "d"]
                        }}
                    />
                    //highlight-end
                </MapComponent>
            </div>
        </MaptalksProvider>
    );
}
```

This map may be enough if you need to create a static map, but if yo need to add interactions like map events, you will need to get a map instance:

  1. Create a new state variable to set the map instance.
  2. Set the map state management to MapComponent.
  ```tsx
  export default function Map() {

    //1. create a state variable that contains the map intance.
    //highlight-start
      const [map, getMap] = useState<maptalks.Map>()
      //highlight-end

      return (
        .
        .
        .
                  <MapComponent
                      idMap="myMap"
                      mapOptions={mapOptions}
                      className="mapClass"
                      //highlight-start
                      getMap={getMap}
                      //highlight-end
                  >
        .
        .
        .
      );
  }
  ```
  :::note

  If you need to get map instance in other parts of your application, we reccomended wrap your app with MaptalksProvider in a superior level. In this case, replace the previus step by:

  ```tsx
  export default function Map() {

    //1. Getting map instance by Maptalks Context.
    //highlight-start
      const { map } = useContect(MaptalksContext)
      //highlight-end
      .
      .
      .

  }
  ```

  :::