import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SpaceWrap from '../../components/container/SpaceWrap';
import Frame from '../../components/container/Frame';
import Viewport from '../../components/container/Viewport';
import Square from '../../components/modules/Square';
import { MindMapToolBox } from '../../components/tools/ToolBox';
import { useDispatch, useSelector } from 'react-redux';
import { getNode } from '../../redux/slice/nodeSlice';
import { URL } from '../../API';
import Path from '../../components/modules/Path';

const MindMap = () => {
  // const dispatch = useDispatch();
  const nodeTableId = useSelector(state => state.node.nodeTableId);
  // console.log(nodeTableId);

  const fetchNodsList = async () => {
    if (!nodeTableId) return;
    return await URL.get(`/node/all/${nodeTableId}`);
  };

  const fetchPathList = async () => {
    if (!nodeTableId) return;
    return await URL.get(`/node/path/${nodeTableId}`);
  };

  const nodeQuery = useQuery('nodeData', fetchNodsList);
  const { isLoading, data: nodeList, isError, error } = nodeQuery;
  const pathQurey = useQuery('pathData', fetchPathList);
  const { data: pathList } = pathQurey;

  console.log(pathList);

  const [table, setTable] = useState('');

  useEffect(() => {
    if (!nodeList) return;
    setTable(nodeList.data);
  }, [nodeList]);

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <SpaceWrap>
      <Frame>
        <Viewport>
          {table &&
            table.map((data, index) => (
              <Square
                key={index}
                width={data.width}
                height={data.height}
                radius={data.radius}
                color={data.color}
                fontColor={data.fontColor}
                fontSize={data.fontSize}
                text={data.text}
                xval={data.xval}
                yval={data.yval}
                nodeId={data.nodeId}
                nodeTableId={data.nodeTableId}
              />
            ))}
        </Viewport>
        <Path />
      </Frame>
      <MindMapToolBox nodeTableId={nodeTableId} />
    </SpaceWrap>
  );
};

export default MindMap;
