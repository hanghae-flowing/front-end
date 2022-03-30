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

const MindMap = () => {
  // const dispatch = useDispatch();
  const nodeTableId = useSelector(state => state.node.nodeTableId);
  // console.log(nodeTableId);

  const fetch = async () => {
    if (!nodeTableId) return;
    return await URL.get(`/node/all/${nodeTableId}`);
  };

  const { isLoading, data, isError, error, isFetching } = useQuery(
    'nodeData',
    fetch,
    {
      refetchInterval: 2000,
    },
  );
  // console.log(data);

  const [table, setTable] = useState('');
  // console.log(table);

  // useEffect(() => {
  //   if (!nodeTableId) return;
  //   dispatch(getNode(nodeTableId));
  // }, [nodeTableId]);

  // let nodeObject = useSelector(state => state.node.node);

  useEffect(() => {
    if (!data) return;
    setTable(data.data);
  }, [data]);

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
      </Frame>
      <MindMapToolBox nodeTableId={nodeTableId} />
    </SpaceWrap>
  );
};

export default MindMap;
