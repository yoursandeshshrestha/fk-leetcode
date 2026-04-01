'use client';

import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

const nodeStyle = {
  background: '#d4d0c8',
  color: '#000000',
  padding: '4px 8px',
  borderRadius: 0,
  borderStyle: 'solid' as const,
  borderWidth: '2px',
  borderTopColor: '#ffffff',
  borderLeftColor: '#ffffff',
  borderRightColor: '#404040',
  borderBottomColor: '#404040',
  width: 160,
  textAlign: 'center' as const,
  fontSize: 11,
  fontWeight: 600,
  fontFamily: 'Tahoma, Verdana, Arial, sans-serif',
  boxShadow: 'inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080',
};

const selectedNodeStyle = {
  ...nodeStyle,
  background: '#316ac5',
  color: '#ffffff',
  borderTopColor: '#5b8fd4',
  borderLeftColor: '#5b8fd4',
  borderRightColor: '#1a4a8a',
  borderBottomColor: '#1a4a8a',
};

const nodes = [
  { id: '1', position: { x: 280, y: 0 }, data: { label: 'Arrays & Hashing' }, style: selectedNodeStyle },
  { id: '2', position: { x: 100, y: 120 }, data: { label: 'Two Pointers' }, style: nodeStyle },
  { id: '3', position: { x: 460, y: 120 }, data: { label: 'Stack' }, style: nodeStyle },
  { id: '4', position: { x: 0, y: 260 }, data: { label: 'Linked List' }, style: nodeStyle },
  { id: '5', position: { x: 220, y: 260 }, data: { label: 'Sliding Window' }, style: nodeStyle },
  { id: '6', position: { x: 460, y: 260 }, data: { label: 'Binary Search' }, style: nodeStyle },
  { id: '7', position: { x: 280, y: 400 }, data: { label: 'Trees' }, style: nodeStyle },
  { id: '8', position: { x: 60, y: 540 }, data: { label: 'Tries' }, style: nodeStyle },
  { id: '9', position: { x: 280, y: 540 }, data: { label: 'Heap / Priority Queue' }, style: nodeStyle },
  { id: '10', position: { x: 500, y: 540 }, data: { label: 'Backtracking' }, style: nodeStyle },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', style: { stroke: '#0058b4', strokeWidth: 1 } },
  { id: 'e1-3', source: '1', target: '3', style: { stroke: '#0058b4', strokeWidth: 1 } },
  { id: 'e2-4', source: '2', target: '4', style: { stroke: '#808080', strokeWidth: 1 } },
  { id: 'e2-5', source: '2', target: '5', style: { stroke: '#808080', strokeWidth: 1 } },
  { id: 'e2-6', source: '2', target: '6', style: { stroke: '#808080', strokeWidth: 1 } },
  { id: 'e4-7', source: '4', target: '7', style: { stroke: '#808080', strokeWidth: 1 } },
  { id: 'e6-7', source: '6', target: '7', style: { stroke: '#808080', strokeWidth: 1 } },
  { id: 'e7-8', source: '7', target: '8', style: { stroke: '#808080', strokeWidth: 1 } },
  { id: 'e7-9', source: '7', target: '9', style: { stroke: '#808080', strokeWidth: 1 } },
  { id: 'e7-10', source: '7', target: '10', style: { stroke: '#808080', strokeWidth: 1 } },
];

export default function RoadmapGraph() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#ffffff', pointerEvents: 'none' }}>
      <style>{`
        .react-flow__handle { opacity: 0 !important; pointer-events: none !important; }
        .react-flow__node { pointer-events: none !important; }
        .react-flow__background { background: #ffffff; }
        .react-flow__edge-path { stroke-dasharray: none; }
      `}</style>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        elementsSelectable={false}
        preventScrolling={true}
      />
    </div>
  );
}
