import React, { useState } from 'react';
import FitnessClassCard from './FitnessClassCard';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Classes.css';
import weight from './class_images/class_1.jpeg';
import yoga from './class_images/yoga.jpeg';
import cardio from './class_images/cardio.jpeg';





const FitnessClassApp = () => {
  // Sample data for fitness classes
  const fitnessClassesData = [
      {
        id: 1,
        image: weight,
        category: 'Weight Training',
        students: 8,
        name: 'Strength Training 101',
        length: 100,
        instructor: 'Alex',
        classes: 5,
        difficulty: 'Beginner',
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
        difficulty: 'Intermediate',
      },
      {
        id: 3,
        image: cardio,
        category: 'Cardio',
        students: 20,
        name: 'High-Intensity Interval Training',
        length: 60,
        instructor: 'Max',
        classes: 18,
        difficulty: 'Advanced',
      },
      {
        id: 4,
        image: yoga,
        category: 'Weight Training',
        students: 9,
        name: 'Full Body Sculpt',
        length: 60,
        instructor: 'Austin',
        classes: 22,
        difficulty: 'Intermediate',
      },
      {
        id: 5,
        image: weight,
        category: 'Weight Training',
        students: 12,
        name: 'Powerlifting Basics',
        length: 60,
        instructor: 'Max',
        classes: 8,
        difficulty: 'Beginner',
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
        difficulty: 'Advanced',
      },
      {
        id: 7,
        image: cardio,
        category: 'Cardio',
        students: 6,
        name: 'Kickboxing Cardio',
        length: 45,
        instructor: 'Sarah',
        classes: 7,
        difficulty: 'Intermediate',
      },
      {
        id: 8,
        image: weight,
        category: 'Weight Training',
        students: 10,
        name: 'Functional Strength',
        length: 75,
        instructor: 'Emma',
        classes: 12,
        difficulty: 'Intermediate',
      },
      {
        id: 9,
        image: yoga,
        category: 'Yoga',
        students: 5,
        name: 'Restorative Yoga',
        length: 90,
        instructor: 'George',
        classes: 4,
        difficulty: 'Beginner',
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
        difficulty: 'Intermediate',
      },
      {
        id: 11,
        image: weight,
        category: 'Weight Training',
        students: 14,
        name: 'Bodyweight Bootcamp',
        length: 60,
        instructor: 'Sarah',
        classes: 10,
        difficulty: 'Advanced',
      },
      {
        id: 12,
        image: yoga,
        category: 'Yoga',
        students: 7,
        name: 'Yin Yoga',
        length: 75,
        instructor: 'Austin',
        classes: 6,
        difficulty: 'Intermediate',
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
        difficulty: 'Beginner',
      },
      // 14th fitness class
      {
        id: 14,
        image: cardio,
        category: 'Cardio',
        students: 15,
        name: 'Dance Cardio',
        length: 60,
        instructor: 'Emma',
        classes: 10,
        difficulty: 'Intermediate',
      },
      // 15th fitness class
      {
        id: 15,
        image: yoga,
        category: 'Yoga',
        students: 20,
        name: 'Vinyasa Flow',
        length: 75,
        instructor: 'Jameson',
        classes: 12,
        difficulty: 'Intermediate',
      },
      // 16th fitness class
      {
        id: 16,
        image: cardio,
        category: 'Cardio',
        students: 10,
        name: 'Kickboxing Fusion',
        length: 45,
        instructor: 'Sarah',
        classes: 8,
        difficulty: 'Advanced',
      },
      // 17th fitness class
      {
        id: 17,
        image: yoga,
        category: 'Yoga',
        students: 12,
        name: 'Power Yoga',
        length: 60,
        instructor: 'Austin',
        classes: 15,
        difficulty: 'Advanced',
      },
      // 18th fitness class
      {
        id: 18,
        image: cardio,
        category: 'Cardio',
        students: 18,
        name: 'HIIT and Run',
        length: 45,
        instructor: 'Alex',
        classes: 20,
        difficulty: 'Intermediate',
      },
    

  ];

  // State for filters
  const [studentsFilter, setStudentsFilter] = useState('');
  const [classesFilter, setClassesFilter] = useState('');
  const [activityFilter, setActivityFilter] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');

  // Function to handle filter changes
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

  // Function to check if a fitness class matches the selected filters
  const doesClassMatchFilters = (fitnessClass) => {
    const studentsMatch =
      studentsFilter.length === 0 ||
      studentsFilter.includes('20+') &&
      fitnessClass.students >= 20 ||
      (studentsFilter.includes('5-10') &&
        fitnessClass.students >= 5 &&
        fitnessClass.students <= 10) ||
      (studentsFilter.includes('11-19') &&
        fitnessClass.students >= 11 &&
        fitnessClass.students <= 19);

    const classesMatch =
      classesFilter.length === 0 ||
      classesFilter.includes('20+') &&
      fitnessClass.classes >= 20 ||
      (classesFilter.includes('1-14') &&
        fitnessClass.classes >= 1 &&
        fitnessClass.classes <= 14) ||
      (classesFilter.includes('15-19') &&
        fitnessClass.classes >= 15 &&
        fitnessClass.classes <= 19);

    const activityMatch =
      activityFilter.length === 0 ||
      activityFilter.includes('Weight Training') && fitnessClass.category === 'Weight Training' ||
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

  // Function to render fitness class cards
  const renderFitnessClassCards = () => {
    const filteredClasses = fitnessClassesData.filter(doesClassMatchFilters);

    return filteredClasses.map((fitnessClass) => (
      <Col key={fitnessClass.id} className="col">
        <FitnessClassCard fitnessClass={fitnessClass} />
      </Col>
    ));
  };

  return (
    <div className = "online-classes"> 
    <div className="page-container">
      <div className="sidebar">
        <h2>Filters</h2>
        <div className>
          <h3>Number of Students</h3>
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
          <div>
            <h3>Number of Classes</h3>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="1-14"
                  name="classes"
                  value="1-14"
                  checked={classesFilter.includes('1-14')}
                  onChange={(e) => handleFilterChange('classes', e.target.value)}
                />
                <Form.Check
                  type="checkbox"
                  label="15-19"
                  name="classes"
                  value="15-19"
                  checked={classesFilter.includes('15-19')}
                  onChange={(e) => handleFilterChange('classes', e.target.value)}
                />
                <Form.Check
                  type="checkbox"
                  label="20+"
                  name="classes"
                  value="20+"
                  checked={classesFilter.includes('20+')}
                  onChange={(e) => handleFilterChange('classes', e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
          <div>
            <h3>Activity Type</h3>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Weight Training"
                  name="activity"
                  value="Weight Training"
                  checked={activityFilter.includes('Weight Training')}
                  onChange={(e) => handleFilterChange('activity', e.target.value)}
                />
                <Form.Check
                  type="checkbox"
                  label="Cardio"
                  name="activity"
                  value="Cardio"
                  checked={activityFilter.includes('Cardio')}
                  onChange={(e) => handleFilterChange('activity', e.target.value)}
                />
                <Form.Check
                  type="checkbox"
                  label="Yoga"
                  name="activity"
                  value="Yoga"
                  checked={activityFilter.includes('Yoga')}
                  onChange={(e) => handleFilterChange('activity', e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div>
          <h3>Difficulty</h3>
          <Form>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Beginner"
                name="difficulty"
                value="Beginner"
                checked={difficultyFilter.includes('Beginner')}
                onChange={(e) => handleFilterChange('difficulty', e.target.value)}
              />
              <Form.Check
                type="checkbox"
                label="Intermediate"
                name="difficulty"
                value="Intermediate"
                checked={difficultyFilter.includes('Intermediate')}
                onChange={(e) => handleFilterChange('difficulty', e.target.value)}
              />
              <Form.Check
                type="checkbox"
                label="Advanced"
                name="difficulty"
                value="Advanced"
                checked={difficultyFilter.includes('Advanced')}
                onChange={(e) => handleFilterChange('difficulty', e.target.value)}
              />
            </Form.Group>
          </Form>
        </div>
        <div>
          <h3>Duration</h3>
          <Form>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="30-80"
                name="duration"
                value="30-80"
                checked={durationFilter.includes('30-80')}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
              />
              <Form.Check
                type="checkbox"
                label="90+"
                name="duration"
                value="90+"
                checked={durationFilter.includes('90+')}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="content">
        <br></br>        <br></br>

      <h1 className="title">Online Classes that Suit your <span className="needs">NEEDS</span></h1>
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
