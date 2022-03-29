import React, { useEffect } from 'react';
import SpaceWrap from '../../components/container/SpaceWrap';
import Frame from '../../components/container/Frame';
import Viewport from '../../components/container/Viewport';
import Square from '../../components/modules/Square';
import { MindMapToolBox } from '../../components/tools/ToolBox';
import { useDispatch, useSelector } from 'react-redux';
import { getNode } from '../../redux/slice/nodeSlice';

const MindMap = () => {
  const dispatch = useDispatch();
  const nodeTableId = useSelector(state => state.node.nodeTableId);
  useEffect(() => {
    if (!nodeTableId) return;
    dispatch(getNode(nodeTableId));
  }, [nodeTableId]);

  let nodeObject = useSelector(state => state.node.node);
  return (
    <SpaceWrap>
      <Frame>
        <Viewport>
          {nodeObject &&
            nodeObject.map((data, index) => (
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
