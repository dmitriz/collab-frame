# Agent-Specific Prompt Implementation

## Overview

This guide provides code examples and frameworks for AI agents to automatically generate, optimize, and manage prompts. Essential for building self-improving AI systems and automated prompt engineering workflows within the Collab Frame ecosystem.

## Core Implementation Patterns

### 1. Dynamic Prompt Generation

**Pattern**: AI agents generate contextual prompts based on task requirements

```python
class PromptGenerator:
    def __init__(self, model_provider="openai"):
        self.provider = model_provider
        self.prompt_templates = {
            "analysis": "Analyze the following {data_type}: {content}\n\nProvide insights on: {focus_areas}",
            "generation": "Generate {output_type} based on: {requirements}\n\nConstraints: {constraints}",
            "evaluation": "Evaluate {subject} using criteria: {criteria}\n\nProvide scores and reasoning."
        }
    
    def generate_prompt(self, task_type, **kwargs):
        """Generate contextual prompt for specific task"""
        base_template = self.prompt_templates.get(task_type)
        if not base_template:
            return self._create_adaptive_prompt(task_type, kwargs)
        
        return base_template.format(**kwargs)
    
    def _create_adaptive_prompt(self, task_type, context):
        """Generate prompt when no template exists"""
        prompt_request = f"""
        Create an effective prompt for: {task_type}
        Context: {context}
        
        Requirements:
        - Clear and specific instructions
        - Include relevant context
        - Specify desired output format
        - Include quality criteria
        """
        return self._call_llm(prompt_request)
```

### 2. Automated Prompt Optimization

**Pattern**: Iterative improvement based on performance feedback

```python
class PromptOptimizer:
    def __init__(self):
        self.performance_history = []
        self.optimization_strategies = [
            "add_examples",
            "clarify_instructions", 
            "adjust_format",
            "include_constraints",
            "add_context"
        ]
    
    def optimize_prompt(self, prompt, performance_score, target_score=0.9):
        """Iteratively improve prompt based on performance"""
        if performance_score >= target_score:
            return prompt
        
        # Analyze current prompt
        analysis = self._analyze_prompt_weaknesses(prompt, performance_score)
        
        # Apply optimization strategy
        strategy = self._select_optimization_strategy(analysis)
        optimized_prompt = self._apply_strategy(prompt, strategy, analysis)
        
        return optimized_prompt
    
    def _analyze_prompt_weaknesses(self, prompt, score):
        """Identify areas for improvement"""
        analysis_prompt = f"""
        Analyze this prompt for weaknesses:
        
        Prompt: {prompt}
        Performance Score: {score}/1.0
        
        Identify specific issues:
        - Clarity problems
        - Missing context
        - Ambiguous instructions
        - Format issues
        - Missing examples
        
        Provide specific improvement recommendations.
        """
        return self._call_llm(analysis_prompt)
    
    def _apply_strategy(self, prompt, strategy, analysis):
        """Apply optimization strategy to prompt"""
        optimization_prompt = f"""
        Improve this prompt using strategy: {strategy}
        
        Original Prompt: {prompt}
        Analysis: {analysis}
        
        Create an improved version that addresses the identified issues.
        Maintain the core intent while implementing the optimization strategy.
        """
        return self._call_llm(optimization_prompt)
```

### 3. Multi-Agent Prompt Coordination

**Pattern**: Coordinated prompt generation across multiple AI agents

```python
class MultiAgentPromptCoordinator:
    def __init__(self):
        self.agents = {}
        self.coordination_patterns = {
            "sequential": self._sequential_coordination,
            "parallel": self._parallel_coordination,
            "hierarchical": self._hierarchical_coordination
        }
    
    def register_agent(self, agent_id, capabilities, role):
        """Register agent with specific capabilities"""
        self.agents[agent_id] = {
            "capabilities": capabilities,
            "role": role,
            "prompt_history": [],
            "performance_metrics": {}
        }
    
    def coordinate_prompt_generation(self, task, pattern="sequential"):
        """Coordinate multiple agents for complex prompt generation"""
        coordination_func = self.coordination_patterns[pattern]
        return coordination_func(task)
    
    def _sequential_coordination(self, task):
        """Sequential prompt refinement across agents"""
        prompt = task["initial_prompt"]
        
        for agent_id in task["agent_sequence"]:
            agent = self.agents[agent_id]
            
            refinement_request = f"""
            Refine this prompt for {agent['role']} perspective:
            
            Current Prompt: {prompt}
            Task Context: {task['context']}
            Your Capabilities: {agent['capabilities']}
            
            Improve the prompt while maintaining previous refinements.
            """
            
            prompt = self._call_agent(agent_id, refinement_request)
            
        return prompt
    
    def _parallel_coordination(self, task):
        """Parallel prompt generation with synthesis"""
        prompts = {}
        
        # Generate prompts in parallel
        for agent_id, agent in self.agents.items():
            generation_request = f"""
            Generate a prompt for: {task['objective']}
            From {agent['role']} perspective using {agent['capabilities']}
            
            Context: {task['context']}
            Requirements: {task['requirements']}
            """
            
            prompts[agent_id] = self._call_agent(agent_id, generation_request)
        
        # Synthesize best elements
        synthesis_request = f"""
        Synthesize the best elements from these agent-generated prompts:
        
        {prompts}
        
        Create a unified prompt that combines the strengths of each approach.
        """
        
        return self._call_llm(synthesis_request)
```

## Automated Testing and Validation

### Performance Evaluation Framework

```python
class PromptPerformanceEvaluator:
    def __init__(self):
        self.test_cases = []
        self.evaluation_metrics = [
            "accuracy",
            "relevance", 
            "completeness",
            "clarity",
            "consistency"
        ]
    
    def evaluate_prompt(self, prompt, test_cases):
        """Evaluate prompt performance across test cases"""
        results = []
        
        for test_case in test_cases:
            response = self._execute_prompt(prompt, test_case["input"])
            score = self._score_response(response, test_case["expected"])
            
            results.append({
                "test_case": test_case["id"],
                "response": response,
                "score": score,
                "metrics": self._detailed_metrics(response, test_case)
            })
        
        return self._aggregate_results(results)
    
    def _score_response(self, response, expected):
        """Score response against expected outcome"""
        scoring_prompt = f"""
        Evaluate this response against the expected outcome:
        
        Response: {response}
        Expected: {expected}
        
        Score from 0.0 to 1.0 on:
        - Accuracy: How correct is the response?
        - Relevance: How well does it address the question?
        - Completeness: Does it cover all required aspects?
        
        Provide overall score and breakdown.
        """
        
        evaluation = self._call_llm(scoring_prompt)
        return self._parse_score(evaluation)
```

## Self-Learning Prompt Systems

### Adaptive Prompt Evolution

```python
class AdaptivePromptSystem:
    def __init__(self):
        self.prompt_generations = {}
        self.performance_tracking = {}
        self.learning_rate = 0.1
    
    def evolve_prompt(self, prompt_id, feedback):
        """Evolve prompt based on usage feedback"""
        current_prompt = self.prompt_generations[prompt_id][-1]
        
        # Analyze feedback patterns
        feedback_analysis = self._analyze_feedback(feedback)
        
        # Generate evolutionary variations
        variations = self._generate_variations(current_prompt, feedback_analysis)
        
        # Test variations
        best_variation = self._test_variations(variations)
        
        # Update prompt generation
        self.prompt_generations[prompt_id].append(best_variation)
        
        return best_variation
    
    def _generate_variations(self, prompt, feedback_analysis):
        """Generate prompt variations based on feedback"""
        variation_prompt = f"""
        Generate 5 variations of this prompt based on feedback analysis:
        
        Original Prompt: {prompt}
        Feedback Analysis: {feedback_analysis}
        
        Create variations that address feedback while maintaining core functionality.
        Focus on:
        - Improved clarity
        - Better structure
        - Enhanced specificity
        - Reduced ambiguity
        """
        
        variations_text = self._call_llm(variation_prompt)
        return self._parse_variations(variations_text)
```

## Integration with Collab Frame Principles

### Intent-Driven Prompt Generation

```python
class IntentDrivenPromptGenerator:
    def __init__(self):
        self.intent_analyzer = IntentAnalyzer()
        self.collab_frame_templates = {
            "delegation": "Delegate this task: {task}\n\nProvider clear context: {context}\n\nSuccess criteria: {criteria}",
            "reflection": "Reflect on: {subject}\n\nConsider: {aspects}\n\nProvide insights and learning points.",
            "clarification": "Clarify the following: {request}\n\nEnsure understanding before proceeding."
        }
    
    def generate_collab_frame_prompt(self, intent, context):
        """Generate prompts aligned with Collab Frame principles"""
        intent_type = self.intent_analyzer.classify_intent(intent)
        
        if intent_type in self.collab_frame_templates:
            return self.collab_frame_templates[intent_type].format(**context)
        
        # Generate custom prompt with Collab Frame principles
        return self._create_principle_aligned_prompt(intent, context)
    
    def _create_principle_aligned_prompt(self, intent, context):
        """Create prompt following Collab Frame principles"""
        prompt_request = f"""
        Create a prompt for: {intent}
        Context: {context}
        
        Follow Collab Frame principles:
        - Start with clear intent
        - Provide necessary context
        - Enable effective delegation
        - Include reflection points
        - Support human-AI collaboration
        """
        return self._call_llm(prompt_request)
```

## Integration Patterns

### API-Driven Prompt Management

```python
class PromptAPI:
    def __init__(self):
        self.prompt_store = PromptStore()
        self.optimizer = PromptOptimizer()
        self.evaluator = PromptPerformanceEvaluator()
    
    def create_prompt(self, task_description, requirements):
        """API endpoint for prompt creation"""
        prompt = self.prompt_store.generate_prompt(task_description, requirements)
        
        # Immediate optimization
        optimized_prompt = self.optimizer.optimize_prompt(prompt, 0.7, 0.9)
        
        # Store and return
        prompt_id = self.prompt_store.save_prompt(optimized_prompt)
        
        return {
            "prompt_id": prompt_id,
            "prompt": optimized_prompt,
            "status": "created",
            "optimization_applied": True
        }
    
    def execute_prompt(self, prompt_id, input_data):
        """Execute prompt with performance tracking"""
        prompt = self.prompt_store.get_prompt(prompt_id)
        
        # Execute with monitoring
        start_time = time.time()
        response = self._call_llm(prompt.format(**input_data))
        execution_time = time.time() - start_time
        
        # Track performance
        self._log_execution(prompt_id, execution_time, response)
        
        return {
            "response": response,
            "execution_time": execution_time,
            "prompt_id": prompt_id
        }
    
    def optimize_prompt(self, prompt_id, performance_feedback):
        """API endpoint for prompt optimization"""
        current_prompt = self.prompt_store.get_prompt(prompt_id)
        
        # Performance-based optimization
        optimized = self.optimizer.optimize_prompt(
            current_prompt, 
            performance_feedback["score"]
        )
        
        # Update and version
        new_version = self.prompt_store.create_version(prompt_id, optimized)
        
        return {
            "prompt_id": prompt_id,
            "version": new_version,
            "optimized_prompt": optimized,
            "improvement": performance_feedback["score"]
        }
```

## Production Implementation Guidelines

### 1. Prompt Lifecycle Management

**Stages**: Development → Testing → Staging → Production → Monitoring

```python
class PromptLifecycleManager:
    def __init__(self):
        self.stages = ["development", "testing", "staging", "production"]
        self.current_stage = {}
        self.approval_workflow = ApprovalWorkflow()
    
    def promote_prompt(self, prompt_id, from_stage, to_stage):
        """Promote prompt through lifecycle stages"""
        # Validate transition
        if not self._validate_promotion(prompt_id, from_stage, to_stage):
            raise InvalidPromotionError()
        
        # Run stage-specific tests
        test_results = self._run_stage_tests(prompt_id, to_stage)
        
        if test_results["passed"]:
            self.current_stage[prompt_id] = to_stage
            return {"status": "promoted", "stage": to_stage}
        else:
            return {"status": "failed", "issues": test_results["issues"]}
```

### 2. Monitoring and Analytics

**Metrics**: Performance, usage patterns, error rates, optimization opportunities

```python
class PromptMonitoring:
    def __init__(self):
        self.metrics_collector = MetricsCollector()
        self.alert_manager = AlertManager()
    
    def track_prompt_execution(self, prompt_id, execution_data):
        """Track prompt performance in production"""
        metrics = {
            "execution_time": execution_data["duration"],
            "token_usage": execution_data["tokens"],
            "success_rate": execution_data["success"],
            "user_satisfaction": execution_data.get("rating", None)
        }
        
        self.metrics_collector.record(prompt_id, metrics)
        
        # Check for performance degradation
        if self._detect_performance_issues(prompt_id, metrics):
            self.alert_manager.trigger_optimization_alert(prompt_id)
```

## Best Practices for Agent Implementation

### 1. Error Handling and Fallbacks

```python
class RobustPromptExecution:
    def __init__(self):
        self.fallback_prompts = {}
        self.retry_strategies = ["simplify", "add_context", "break_down"]
    
    def execute_with_fallback(self, prompt, input_data, max_retries=3):
        """Execute prompt with automatic fallback handling"""
        for attempt in range(max_retries):
            try:
                response = self._execute_prompt(prompt, input_data)
                if self._validate_response(response):
                    return response
                else:
                    # Apply retry strategy
                    prompt = self._apply_retry_strategy(prompt, attempt)
            except Exception as e:
                if attempt == max_retries - 1:
                    return self._use_fallback_prompt(input_data)
                prompt = self._simplify_prompt(prompt)
```

### 2. Resource Management

```python
class PromptResourceManager:
    def __init__(self):
        self.rate_limits = {}
        self.token_budgets = {}
        self.cost_tracking = {}
    
    def execute_within_limits(self, prompt, input_data, agent_id):
        """Execute prompt while respecting resource constraints"""
        # Check rate limits
        if not self._check_rate_limit(agent_id):
            return {"status": "rate_limited", "retry_after": self._get_retry_time(agent_id)}
        
        # Estimate token usage
        estimated_tokens = self._estimate_tokens(prompt, input_data)
        if not self._check_token_budget(agent_id, estimated_tokens):
            return {"status": "budget_exceeded", "tokens_needed": estimated_tokens}
        
        # Execute with tracking
        response = self._tracked_execution(prompt, input_data, agent_id)
        return response
```

## Integration Examples

### ChatGPT Function Integration

```python
def generate_optimized_prompt(task_description, performance_requirements):
    """
    Generate and optimize a prompt for a specific task.
    
    Args:
        task_description: Description of the task the prompt should accomplish
        performance_requirements: Dict with accuracy, speed, cost requirements
    
    Returns:
        Optimized prompt ready for production use
    """
    generator = PromptGenerator()
    optimizer = PromptOptimizer()
    
    # Generate initial prompt
    initial_prompt = generator.generate_prompt("custom", task=task_description)
    
    # Optimize based on requirements
    optimized_prompt = optimizer.optimize_prompt(
        initial_prompt, 
        performance_requirements.get("target_score", 0.85)
    )
    
    return {
        "prompt": optimized_prompt,
        "estimated_performance": performance_requirements["target_score"],
        "optimization_applied": True
    }
```

### Webhook Integration for Continuous Improvement

```python
class PromptWebhookHandler:
    def __init__(self):
        self.prompt_system = AdaptivePromptSystem()
    
    def handle_feedback_webhook(self, prompt_id, feedback_data):
        """Handle real-time feedback for prompt improvement"""
        # Process feedback
        feedback = {
            "score": feedback_data["rating"],
            "comments": feedback_data["user_comments"],
            "success_metrics": feedback_data["outcomes"]
        }
        
        # Trigger evolution if performance drops
        if feedback["score"] < 0.7:
            evolved_prompt = self.prompt_system.evolve_prompt(prompt_id, feedback)
            
            # Notify stakeholders
            self._notify_prompt_update(prompt_id, evolved_prompt)
        
        return {"status": "processed", "prompt_id": prompt_id}
```

## Conclusion

This implementation framework enables AI agents to automatically generate, optimize, and manage prompts with minimal human intervention within the Collab Frame ecosystem. Key benefits:

- **Automated Optimization**: Continuous improvement based on performance data
- **Scalable Architecture**: Handle multiple prompts across different tasks  
- **Production Ready**: Includes monitoring, error handling, and resource management
- **Integration Friendly**: API-driven design for easy system integration
- **Collab Frame Aligned**: Follows intent-driven, reflection-friendly principles

The framework supports both individual agent prompt management and complex multi-agent coordination scenarios, making it suitable for production AI systems of any scale while maintaining the collaborative spirit of the Collab Frame approach.
