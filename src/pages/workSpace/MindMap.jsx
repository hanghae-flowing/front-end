import React, { useEffect } from 'react';
import SpaceWrap from '../../components/container/SpaceWrap';
import Frame from '../../components/container/Frame';
import Viewport from '../../components/container/Viewport';
import Square from '../../components/modules/Square';
import { MindMapToolBox } from '../../components/tools/ToolBox';
import { useDispatch, useSelector } from 'react-redux';
import { getNode } from '../../redux/slice/nodeSlice';
import { useLocation } from 'react-router-dom';

const MindMap = () => {
  const dispatch = useDispatch();
  const projectId = useSelector(state => state.node.projectId);
  const nodeTableId = useLocation().state;
  // const nodeTableId = useSelector(state => state.node.nodeTableId);
  console.log(nodeTableId);
  useEffect(() => {
    dispatch(getNode(nodeTableId)).then(res => console.log(res));
  }, [dispatch]);

  let nodeObject = useSelector(state => state.node.node);
  console.log(nodeObject);
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
      <MindMapToolBox projectId={projectId} />
    </SpaceWrap>
  );
};

export default MindMap;
