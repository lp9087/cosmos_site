import { useCallback, useEffect, useRef, useState } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';

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

    setHoverInfo(hoveredFeature ? { feature: hoveredFeature, x, y } : null);
  }, []);

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
