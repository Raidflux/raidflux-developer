
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export const UETabs = ({ children }) => {
    if (children.length < 2) return null;
    return (
        <Tabs
            groupId="ue-language"
            defaultValue="cpp"
            values={[
                { label: 'C++', value: 'cpp' },
                { label: 'Blueprints', value: 'bp' },
            ]}>
            <TabItem value="cpp">{children[0]}</TabItem>
            <TabItem value="bp">{children[1]}</TabItem>
        </Tabs>
    )
}

export const BPTab = ({ children }) => (
    <>{children}</>
)

export const CPPTab = ({ children }) => (
    <CodeBlock className="language-cpp">{children}</CodeBlock>
)