import sparkIcon from '@/assets/tech-stack/big-data/spark.svg';
import kafkaIcon from '@/assets/tech-stack/big-data/kafka.svg';
import samzaIcon from '@/assets/tech-stack/big-data/samza.png';
import zeppelinIcon from '@/assets/tech-stack/big-data/zeppelin.png';
import databricksIcon from '@/assets/tech-stack/big-data/databricks.svg';
import emrIcon from '@/assets/tech-stack/big-data/emr.svg';
import hdInsightIcon from '@/assets/tech-stack/big-data/hd-insight.svg';
import neo4jIcon from '@/assets/tech-stack/big-data/neo4j.svg';
import TechStack from './TechStack';

const technologies = [
    {
        iconPath: sparkIcon.src,
        name: "Apache Spark"
    },
    {
        iconPath: kafkaIcon.src,
        name: "Apache Kafka"
    },
    {
        iconPath: samzaIcon.src,
        name: "Apache Samza"
    },
    {
        iconPath: zeppelinIcon.src,
        name: "Apache Zeppelin"
    },
    {
        iconPath: databricksIcon.src,
        name: "Databricks"
    },
    {
        iconPath: emrIcon.src,
        name: "Amazon EMR"
    },
    {
        iconPath: hdInsightIcon.src,
        name: "Azure HDInsight"
    },
    {
        iconPath: neo4jIcon.src,
        name: "Neo4j"
    }
];

export default function BigDataTechStack() {
  return (
    <div className="py-4">
      <TechStack 
        technologies={technologies}
        title="Big Data & Analytics"
        itemsPerView={{
          mobile: 2,
          tablet: 4,
          desktop: 6
        }}
      />
    </div>
  );
}