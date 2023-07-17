import React, { useState } from 'react';
import FitnessClassCard from './FitnessClassCard_fr';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Classes.css';
import weight from './class_images/class_1.jpeg';
import yoga from './class_images/yoga.jpeg';
import cardio from './class_images/cardio.jpeg';

const FitnessClassApp = () => {
  const fitnessClassesData = [
    {
      id: 1,
      image: weight,
      category: 'Entraînement avec des poids',
      students: 8,
      name: 'Entraînement à la force 101',
      length: 100,
      instructor: 'Alex',
      classes: 5,
      difficulty: 'Débutant',
    },
    {
      id: 2,
      image: yoga,
      category: 'Yoga',
      students: 15,
      name: 'Yoga Flow',
      length: 60,
      instructor: 'Emma',
      classes: 10,
      difficulty: 'Intermédiaire',
    },
    {
      id: 3,
      image: cardio,
      category: 'Cardio',
      students: 20,
      name: 'Entraînement par intervalles de haute intensité',
      length: 60,
      instructor: 'Max',
      classes: 18,
      difficulty: 'Avancé',
    },
    {
      id: 4,
      image: yoga,
      category: 'Entraînement avec des poids',
      students: 9,
      name: 'Sculpture du corps entier',
      length: 60,
      instructor: 'Austin',
      classes: 22,
      difficulty: 'Intermédiaire',
    },
    {
      id: 5,
      image: weight,
      category: 'Entraînement avec des poids',
      students: 12,
      name: 'Bases de haltérophilie',
      length: 60,
      instructor: 'Max',
      classes: 8,
      difficulty: 'Débutant',
    },
    {
      id: 6,
      image: yoga,
      category: 'Yoga',
      students: 20,
      name: 'Vinyasa Flow',
      length: 60,
      instructor: 'Sarah',
      classes: 15,
      difficulty: 'Avancé',
    },
    {
      id: 7,
      image: cardio,
      category: 'Cardio',
      students: 6,
      name: 'Cardio Kickboxing',
      length: 45,
      instructor: 'Sarah',
      classes: 7,
      difficulty: 'Intermédiaire',
    },
    {
      id: 8,
      image: weight,
      category: 'Entraînement avec des poids',
      students: 10,
      name: 'Force fonctionnelle',
      length: 75,
      instructor: 'Emma',
      classes: 12,
      difficulty: 'Intermédiaire',
    },
    {
      id: 9,
      image: yoga,
      category: 'Yoga',
      students: 5,
      name: 'Yoga de restauration',
      length: 90,
      instructor: 'George',
      classes: 4,
      difficulty: 'Débutant',
    },
    {
      id: 10,
      image: cardio,
      category: 'Cardio',
      students: 18,
      name: 'Zumba Dance Party',
      length: 45,
      instructor: 'Max',
      classes: 20,
      difficulty: 'Intermédiaire',
    },
    {
      id: 11,
      image: weight,
      category: 'Entraînement avec des poids',
      students: 14,
      name: 'Bootcamp avec poids corporel',
      length: 60,
      instructor: 'Sarah',
      classes: 10,
      difficulty: 'Avancé',
    },
    {
      id: 12,
      image: yoga,
      category: 'Yoga',
      students: 7,
      name: 'Yin Yoga',
      length: 75,
      instructor: 'Alex',
      classes: 6,
      difficulty: 'Intermédiaire',
    },
    {
      id: 13,
      image: yoga,
      category: 'Yoga',
      students: 8,
      name: 'Hatha Yoga',
      length: 60,
      instructor: 'Max',
      classes: 5,
      difficulty: 'Débutant',
    },
    {
      id: 14,
      image: cardio,
      category: 'Cardio',
      students: 15,
      name: 'Cardio Dance',
      length: 60,
      instructor: 'Emma',
      classes: 10,
      difficulty: 'Intermédiaire',
    },
    {
      id: 15,
      image: yoga,
      category: 'Yoga',
      students: 20,
      name: 'Vinyasa Flow',
      length: 75,
      instructor: 'Sarah',
      classes: 12,
      difficulty: 'Intermédiaire',
    },
    {
      id: 16,
      image: cardio,
      category: 'Cardio',
      students: 10,
      name: 'Kickboxing Fusion',
      length: 45,
      instructor: 'Sarah',
      classes: 8,
      difficulty: 'Avancé',
    },
    {
      id: 17,
      image: yoga,
      category: 'Yoga',
      students: 12,
      name: 'Power Yoga',
      length: 60,
      instructor: 'Austin',
      classes: 15,
      difficulty: 'Avancé',
    },
    {
      id: 18,
      image: cardio,
      category: 'Cardio',
      students: 18,
      name: 'HIIT et Course',
      length: 45,
      instructor: 'Alex',
      classes: 20,
      difficulty: 'Intermédiaire',
    },
  ];

  // État pour les filtres
  const [studentsFilter, setStudentsFilter] = useState('');
  const [classesFilter, setClassesFilter] = useState('');
  const [activityFilter, setActivityFilter] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');

  // Fonction pour gérer les modifications des filtres
  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'students':
        if (studentsFilter.includes(value)) {
          setStudentsFilter(studentsFilter.filter((item) => item !== value));
        } else {
          setStudentsFilter([...studentsFilter, value]);
        }
        break;
      case 'classes':
        if (classesFilter.includes(value)) {
          setClassesFilter(classesFilter.filter((item) => item !== value));
        } else {
          setClassesFilter([...classesFilter, value]);
        }
        break;
      case 'activity':
        if (activityFilter.includes(value)) {
          setActivityFilter(activityFilter.filter((item) => item !== value));
        } else {
          setActivityFilter([...activityFilter, value]);
        }
        break;
      case 'difficulty':
        if (difficultyFilter.includes(value)) {
          setDifficultyFilter(difficultyFilter.filter((item) => item !== value));
        } else {
          setDifficultyFilter([...difficultyFilter, value]);
        }
        break;
      case 'duration':
        if (durationFilter.includes(value)) {
          setDurationFilter(durationFilter.filter((item) => item !== value));
        } else {
          setDurationFilter([...durationFilter, value]);
        }
        break;
      default:
        break;
    }
  };

  const doesClassMatchFilters = (fitnessClass) => {
    const studentsMatch =
      studentsFilter.length === 0 ||
      studentsFilter.includes('20+') && fitnessClass.students >= 20 ||
      (studentsFilter.includes('5-10') &&
        fitnessClass.students >= 5 &&
        fitnessClass.students <= 10) ||
      (studentsFilter.includes('11-19') &&
        fitnessClass.students >= 11 &&
        fitnessClass.students <= 19);

    const classesMatch =
      classesFilter.length === 0 ||
      classesFilter.includes('20+') && fitnessClass.classes >= 20 ||
      (classesFilter.includes('1-14') &&
        fitnessClass.classes >= 1 &&
        fitnessClass.classes <= 14) ||
      (classesFilter.includes('15-19') &&
        fitnessClass.classes >= 15 &&
        fitnessClass.classes <= 19);

    const activityMatch =
      activityFilter.length === 0 ||
      activityFilter.includes('Entraînement avec des poids') && fitnessClass.category === 'Entraînement avec des poids' ||
      activityFilter.includes('Cardio') && fitnessClass.category === 'Cardio' ||
      activityFilter.includes('Yoga') && fitnessClass.category === 'Yoga';

    const difficultyMatch =
      difficultyFilter.length === 0 ||
      difficultyFilter.includes(fitnessClass.difficulty);

    const durationMatch =
      durationFilter.length === 0 ||
      (durationFilter.includes('90+') && fitnessClass.length >= 90) ||
      (durationFilter.includes('30-80') && fitnessClass.length >= 30 && fitnessClass.length <= 80);

    return (
      studentsMatch &&
      classesMatch &&
      activityMatch &&
      difficultyMatch &&
      durationMatch
    );
  };

  // Fonction pour afficher les cartes de cours de fitness
  const renderFitnessClassCards = () => {
    const filteredClasses = fitnessClassesData.filter(doesClassMatchFilters);

    return filteredClasses.map((fitnessClass) => (
      <Col key={fitnessClass.id} className="col">
        <FitnessClassCard fitnessClass={fitnessClass} />
      </Col>
    ));
  };

  return (
    <div className="online-classes">
      <div className="page-container">
        <div className="sidebar">
          <h2>Filtres</h2>
          <div>
            <h3>Nombre d'étudiants</h3>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="5-10"
                  name="students"
                  value="5-10"
                  checked={studentsFilter.includes('5-10')}
                  onChange={(e) =>
                    handleFilterChange('students', e.target.value)
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="11-19"
                  name="students"
                  value="11-19"
                  checked={studentsFilter.includes('11-19')}
                  onChange={(e) =>
                    handleFilterChange('students', e.target.value)
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="20+"
                  name="students"
                  value="20+"
                  checked={studentsFilter.includes('20+')}
                  onChange={(e) =>
                    handleFilterChange('students', e.target.value)
                  }
                />
              </Form.Group>
            </Form>
          </div>
          <div>
            <h3>Nombre de cours</h3>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="1-14"
                  name="classes"
                  value="1-14"
                  checked={classesFilter.includes('1-14')}
                  onChange={(e) =>
                    handleFilterChange('classes', e.target.value)
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="15-19"
                  name="classes"
                  value="15-19"
                  checked={classesFilter.includes('15-19')}
                  onChange={(e) =>
                    handleFilterChange('classes', e.target.value)
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="20+"
                  name="classes"
                  value="20+"
                  checked={classesFilter.includes('20+')}
                  onChange={(e) =>
                    handleFilterChange('classes', e.target.value)
                  }
                />
              </Form.Group>
            </Form>
          </div>
          <div>
            <h3>Type d'activité</h3>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Entraînement avec des poids"
                  name="activity"
                  value="Entraînement avec des poids"
                  checked={activityFilter.includes('Entraînement avec des poids')}
                  onChange={(e) =>
                    handleFilterChange('activity', e.target.value)
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="Cardio"
                  name="activity"
                  value="Cardio"
                  checked={activityFilter.includes('Cardio')}
                  onChange={(e) =>
                    handleFilterChange('activity', e.target.value)
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="Yoga"
                  name="activity"
                  value="Yoga"
                  checked={activityFilter.includes('Yoga')}
                  onChange={(e) =>
                    handleFilterChange('activity', e.target.value)
                  }
                />
              </Form.Group>
            </Form>
          </div>
          <div>
            <h3>Difficulté</h3>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Débutant"
                  name="difficulty"
                  value="Débutant"
                  checked={difficultyFilter.includes('Débutant')}
                  onChange={(e) =>
                    handleFilterChange('difficulty', e.target.value)
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="Intermédiaire"
                  name="difficulty"
                  value="Intermédiaire"
                  checked={difficultyFilter.includes('Intermédiaire')}
                  onChange={(e) =>
                    handleFilterChange('difficulty', e.target.value)
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="Avancé"
                  name="difficulty"
                  value="Avancé"
                  checked={difficultyFilter.includes('Avancé')}
                  onChange={(e) =>
                    handleFilterChange('difficulty', e.target.value)
                  }
                />
              </Form.Group>
            </Form>
          </div>
          <div>
            <h3>Durée</h3>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="30-80"
                  name="duration"
                  value="30-80"
                  checked={durationFilter.includes('30-80')}
                  onChange={(e) =>
                    handleFilterChange('duration', e.target.value)
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="90+"
                  name="duration"
                  value="90+"
                  checked={durationFilter.includes('90+')}
                  onChange={(e) =>
                    handleFilterChange('duration', e.target.value)
                  }
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="content">
          <h1 className="title">
            Cours en ligne qui répondent à vos <span className="needs">BESOINS</span>
          </h1>
          <Container>
            <Row xs={1} sm={2} md={3} className="card-row">
              {renderFitnessClassCards()}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default FitnessClassApp;
