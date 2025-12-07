'use client';

import { useState } from 'react';
import ToolsLayout from '@/components/tools/ToolsLayout';
import PhysicsView from '@/components/tools/PhysicsView';
import StickView from '@/components/tools/StickView';
import MigView from '@/components/tools/MigView';
import TigView from '@/components/tools/TigView';
import CalculatorView from '@/components/tools/CalculatorView';

export default function ToolsPage() {
    const [activeTab, setActiveTab] = useState('physics');

    return (
        <ToolsLayout activeTab={activeTab} setActiveTab={setActiveTab}>
            {activeTab === 'physics' && <PhysicsView />}
            {activeTab === 'stick' && <StickView />}
            {activeTab === 'mig' && <MigView />}
            {activeTab === 'tig' && <TigView />}
            {activeTab === 'tools' && <CalculatorView />}
        </ToolsLayout>
    );
}
