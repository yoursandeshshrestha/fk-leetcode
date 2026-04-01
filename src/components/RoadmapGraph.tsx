'use client';

import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

const nodeStyle = {
  background: '#1e293b',
  color: 'white',
  padding: 10,
  borderRadius: 12,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  width: 180,
  textAlign: 'center' as const,
  fontSize: 14,
  fontWeight: 600,
};

const nodes = [
  { id: '1', position: { x: 300, y: 0 }, data: { label: 'Arrays & Hashing' }, style: nodeStyle },

  { id: '2', position: { x: 150, y: 120 }, data: { label: 'Two Pointers' }, style: nodeStyle },
  { id: '3', position: { x: 450, y: 120 }, data: { label: 'Stack' }, style: nodeStyle },

  { id: '4', position: { x: 50, y: 260 }, data: { label: 'Linked List' }, style: nodeStyle },
  { id: '5', position: { x: 250, y: 260 }, data: { label: 'Sliding Window' }, style: nodeStyle },
  { id: '6', position: { x: 450, y: 260 }, data: { label: 'Binary Search' }, style: nodeStyle },

  { id: '7', position: { x: 300, y: 400 }, data: { label: 'Trees' }, style: nodeStyle },

  { id: '8', position: { x: 100, y: 540 }, data: { label: 'Tries' }, style: nodeStyle },
  { id: '9', position: { x: 300, y: 540 }, data: { label: 'Heap / Priority Queue' }, style: nodeStyle },
  { id: '10', position: { x: 500, y: 540 }, data: { label: 'Backtracking' }, style: nodeStyle },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },

  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e2-5', source: '2', target: '5', animated: true },
  { id: 'e2-6', source: '2', target: '6', animated: true },

  { id: 'e4-7', source: '4', target: '7', animated: true },
  { id: 'e6-7', source: '6', target: '7', animated: true },

  { id: 'e7-8', source: '7', target: '8', animated: true },
  { id: 'e7-9', source: '7', target: '9', animated: true },
  { id: 'e7-10', source: '7', target: '10', animated: true },
];

export default function RoadmapGraph() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'transparent', pointerEvents: 'none' }}>
      <style>{`
        .react-flow__handle {
          opacity: 0 !important;
          pointer-events: none !important;
        }
        .react-flow__node {
          pointer-events: none !important;
        }
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
