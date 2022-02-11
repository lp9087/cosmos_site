import { useCallback, useEffect, useRef, useState } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import bbox from '@turf/bbox';

import BASE_MAP_STYLE from '@/lib/mapbox/map-style-basic-v8.json';

const RegionsMap = () => {
  const mapRef = useRef();
  const [geoData, setGeoData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);

  useEffect(() => {
    fetch('/rf_subjects.geojson')
      .then(resp => resp.json())
      .then(json => setGeoData(json))
      .catch(err => console.error('Could not load data', err));
  }, []);

  const onHover = useCallback(event => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features && features[0];
    // debugger;

    setHoverInfo(hoveredFeature ? { feature: hoveredFeature, x, y } : null);
  }, []);

  useEffect(() => {
    if (!geoData) return;
    // const [minLng, minLat, maxLng, maxLat] = bbox(geoData);

    // if (feature) {
    //   // calculate the bounding box of the feature
    //   const [minLng, minLat, maxLng, maxLat] = bbox(feature);

    //   mapRef.current.fitBounds(
    //     [
    //       [-180, 41.188865661621094],
    //       [180.00000000000034, 81.85732269287121],
    //     ],
    //     { padding: 40, duration: 1000 }
    //   );
    // }
  }, [geoData]);

  return (
    <div className="h-[600px]">
      <ReactMapGL
        ref={mapRef}
        initialViewState={{
          latitude: 65,
          longitude: 100,
          zoom: 2.2,
        }}
        projection={{ name: 'mercator' }}
        mapStyle={null}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        interactiveLayerIds={['data']}
        onMouseMove={onHover}
        interactive={false}
      >
        <Source type="geojson" data={geoData}>
          <Layer
            id="data"
            type="fill"
            paint={{
              'fill-color': '#3288bd',
              'fill-opacity': 0.8,
            }}
          />
        </Source>
        {hoverInfo && (
          <div
            className="absolute bg-white mt-1 ml-2 px-4 py-2 rounded-lg pointer-events-none"
            style={{ left: hoverInfo.x, top: hoverInfo.y }}
          >
            <span className="text font-semibold">
              {hoverInfo.feature.properties.NAME_1}
            </span>
          </div>
        )}
      </ReactMapGL>
    </div>
  );
};

export default RegionsMap;
