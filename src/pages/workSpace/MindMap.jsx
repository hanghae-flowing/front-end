import React, { useCallback } from 'react';
import SpaceWrap from '../../components/container/SpaceWrap';
import Frame from '../../components/container/Frame';
import Viewport from '../../components/container/Viewport';
import Square from '../../components/modules/Square';
import { MindMapToolBox } from '../../components/tools/ToolBox';
import { useSelector } from 'react-redux';
import Path from '../../components/modules/Path';
import { useNode } from '../../hooks/useNode';
// import { usePath } from '../../hooks/usePath';

const MindMap = () => {
  const nodeTableId = useSelector(state => state.node.nodeTableId);

  const { status, data: nodeList, error, isFetching } = useNode(nodeTableId);
  // console.log(nodeList);
  // const { data: pathList } = usePath(nodeTableId);

  const renderByStatus = useCallback(() => {
    switch (status) {
      case 'loading':
        return <div>loading</div>;
      case 'error':
        if (error instanceof Error) {
          return <span>Error: {error.message}</span>;
        }
        break;
      default:
        return (
          <>
            {nodeList?.map(data => (
              <Square
                key={data.nodeId}
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
          </>
        );
    }
  }, [status, isFetching]);

  return (
    <SpaceWrap>
      <Frame>
        <Viewport>{renderByStatus()}</Viewport>
        <Path />
      </Frame>
      <MindMapToolBox nodeTableId={nodeTableId} />
    </SpaceWrap>
  );
};

export default MindMap;
